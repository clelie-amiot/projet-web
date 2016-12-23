<?php
/*
	Routes
	controller needs to be registered in dependency.php
*/

$app->get('/', 'App\Controllers\HomeController:dispatch')->setName('homepage');

$app->get('/signup', 'App\Controllers\HomeController:signup')->setName('signup');

$app->post('/signup', 'App\Controllers\HomeController:addUser');

$app->get('/signin', 'App\Controllers\HomeController:signin')->setName('signin');

$app->get('/show', 'App\Controllers\HomeController:show')->setName('show');

$app->get('/users', 'App\Controllers\UserController:dispatch')->setName('userpage');