<?php
// API Proxy for Node.js Backend
error_reporting(0);

// CORS Headers
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');

// Handle preflight requests
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Get the requested path
$requestUri = $_SERVER['REQUEST_URI'];
$path = preg_replace('#^/api/?#', '', parse_url($requestUri, PHP_URL_PATH));
$query = parse_url($requestUri, PHP_URL_QUERY);

// Build backend URL
$backend_url = 'http://127.0.0.1:9000/api/' . $path;
if ($query) {
    $backend_url .= '?' . $query;
}

// Initialize cURL
$ch = curl_init($backend_url);

// Set cURL options
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);
curl_setopt($ch, CURLOPT_CUSTOMREQUEST, $_SERVER['REQUEST_METHOD']);
curl_setopt($ch, CURLOPT_TIMEOUT, 30);
curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, 10);

// Handle POST/PUT/PATCH data
if (in_array($_SERVER['REQUEST_METHOD'], ['POST', 'PUT', 'PATCH'])) {
    $postData = file_get_contents('php://input');
    curl_setopt($ch, CURLOPT_POSTFIELDS, $postData);
    
    $headers = [];
    if (isset($_SERVER['CONTENT_TYPE'])) {
        $headers[] = 'Content-Type: ' . $_SERVER['CONTENT_TYPE'];
    }
    $headers[] = 'Content-Length: ' . strlen($postData);
    curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
}

// Execute request
$response = curl_exec($ch);
$httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
$contentType = curl_getinfo($ch, CURLINFO_CONTENT_TYPE);

// Handle errors
if (curl_errno($ch)) {
    http_response_code(502);
    header('Content-Type: application/json');
    echo json_encode([
        'success' => false,
        'message' => 'Backend unavailable: ' . curl_error($ch),
        'error' => 'PROXY_ERROR'
    ]);
} else {
    // Forward response
    http_response_code($httpCode);
    if ($contentType) {
        header('Content-Type: ' . $contentType);
    }
    echo $response;
}

curl_close($ch);
?>