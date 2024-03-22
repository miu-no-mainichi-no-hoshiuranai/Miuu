<?php

// 获取所有图片的路径
$images = glob("*.jpg");

// 生成随机数
$randomIndex = rand(0, count($images) - 1);

// 输出随机图片的 URL
echo $images[$randomIndex];

?>
