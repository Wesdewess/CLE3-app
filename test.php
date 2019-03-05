<?php
use \Sightengine\SightengineClient;
$client = new SightengineClient('1777949695', 'cWYRzhuS2FQPjEvpPSJz');
$output = $client->check(['{model}'])->set_url('https://d3m9459r9kwism.cloudfront.net/img/examples/example7.jpg');
$minor_response = json_decode($output);