<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<HTML>

<HEAD>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>GUESTBOOK</title>
  <link rel="stylesheet" href="/fonts.css">

  <style>
    :root {
      --accent1: #CB3107;
      --accent2: #ef9597;
      --accent3: #F1E450;
      --accent4: #c6e720;
      --color2: #99b5b3;
      --accent6: #347EC4;
      --color1: #6b5f61;
    }

    body {
      margin: 0;
      font-family: consolas;
      background-color: #000;
      background-blend-mode: luminosity;


    }

    a {
      text-decoration: none;
      color: #ccc;
    }

    a hover {
      text-decoration: underline;
    }


    .container {
      width: 100% margin: 0 auto;
    }

    .sidebar {
      position: fixed;
      height: 100%;
      background: #000000 url('/graphics/layout/wirey.png') no-repeat;
      background-size: cover;
      color: #ccc;
      width: 400px;
      margin-left: -10px;
      margin-bottom: -10px;
      border-right: 10px solid #000;
      border-left: 10px solid #000;
    }

    .title {
      font: 70px georgia;
      text-align: center;
      font-style: italic;
    }


    .sidebox {
      color: #000;
      background: #ccc;
      opacity: 0.6;
      width: 200px;
      padding: 5px;
      font: 10px georgia;
      -moz-border-radius: 15px;
      border-radius: 15px;
    }

    .sidecase {
      margin-top: 400px;
      margin-left: 7px;
      color: #000;
    }

    .littlelinks a {
      color: #fff;
      text-decoration: none;
      font: 10px georgia;
    }

    .sidebox a {
      color: #000;
      font: 20px georgia;
      font-style: italic;
      text-decoration: none;
    }

    .sidebox a:hover {
      color: #f6f6f6;
    }

    .content {
      position: relative;
      margin-left: 420px;
      padding: 30px;
      max-width: 60%;
      color: #000;
      font-size: 14px;
    }

    h1 {
      font-family: circulate;
      font-size: 4em;
      margin: 0;
      margin-bottom: 10px;
      color: #2b2325;
      text-align: center;
      text-shadow: var(--color2) 5px 0px 0px, var(--color2) 4.90033px 0.993347px 0px, var(--color2) 4.60531px 1.94709px 0px, var(--color2) 4.12668px 2.82321px 0px, var(--color2) 3.48353px 3.58678px 0px, var(--color2) 2.70151px 4.20735px 0px, var(--color2) 1.81179px 4.6602px 0px, var(--color2) 0.849836px 4.92725px 0px, var(--color2) -0.145998px 4.99787px 0px, var(--color2) -1.13601px 4.86924px 0px, var(--color2) -2.08073px 4.54649px 0px, var(--color2) -2.94251px 4.04248px 0px, var(--color2) -3.68697px 3.37732px 0px, var(--color2) -4.28444px 2.57751px 0px, var(--color2) -4.71111px 1.67494px 0px, var(--color2) -4.94996px 0.7056px 0px, var(--color2) -4.99147px -0.291871px 0px, var(--color2) -4.83399px -1.27771px 0px, var(--color2) -4.48379px -2.2126px 0px, var(--color2) -3.95484px -3.05929px 0px, var(--color2) -3.26822px -3.78401px 0px, var(--color2) -2.4513px -4.35788px 0px, var(--color2) -1.53666px -4.75801px 0px, var(--color2) -0.560763px -4.96846px 0px, var(--color2) 0.437495px -4.98082px 0px, var(--color2) 1.41831px -4.79462px 0px, var(--color2) 2.34258px -4.41727px 0px, var(--color2) 3.17346px -3.86382px 0px, var(--color2) 3.87783px -3.15633px 0px, var(--color2) 4.4276px -2.32301px 0px, var(--color2) 4.80085px -1.39708px 0px, var(--color2) 4.98271px -0.415447px 0px;
    }

    p.desc {
      background-color: #ecece8;
      padding: 20px;
      border: 2px dotted;
      border-color: #95827f;
      border-radius: 10px;
      position: relative;
    }


    h2 {
      font: 20px georgia;
      font-style: italic;
      margin-bottom: 5px;
      text-spacing: 15px;
    }

    .footer {
      text-align: center;
      font: 20px georgia;
      font-style: italic;
    }

    blockquote {
      border-left: 8px solid #000;
      padding: 5px;
    }

    .center {
      text-align: center;
    }

    .firstletter {
      font: 19px book antiqua;
      color: #ccc;
    }

    .deco {
      position: absolute;
    }

    .dc1 {
      left: -16px;
      top: -79px;
      height: 100px;
      filter: grayscale(1);
    }

    .centered {
      text-align: center;
      display: block;
    }

    #comment {
      display: flex;
      flex-wrap: wrap;
      background-color: #6B5F61;
      border: none;
      padding: 10px;
      border-radius: 5px;
    }

    .half {
      width: 50%;
      padding: 5px;
      box-sizing: border-box;
    }

    .full {
      width: 100%;
      padding: 5px;

    }

    input[type="text" i] {
      width: 100%;
      box-sizing: border-box;
    }

    label {
      color: #ffffff;
      font-weight: bold;
      font-family: consolas;
      text-shadow: 3px 2px 2px #000000;
      margin-bottom: 2px;
    }

    textarea {
      width: 100%;
    }

    textarea,
    input {
      background-color: #ECECE8;
      border: 1px solid;
      border-color: #6b5f61;
      border-radius: 5px;
      margin-top: 3px;
    }

    .q,
    .a {
      border: 1px dotted;
      border-radius: 5px;
    }

    .q:first-of-type {
      margin-top: 0;
    }

    .q {
      margin-top: 10px;
      background-color: #F9FBF9;
      overflow: hidden;
    }

    .a {
      margin-left: 20%;
      position: relative;
      background-color: #ECECE8;
    }

    .repi {
      position: absolute;
      left: -30px;
      top: 5px;
    }

    .details {
      background-color: #2b2325;
    }

    .details p {
      margin: 0;
      margin-bottom: 5px;
      padding: 5px;
      color: #eeeeee;

    }

    .details a {
      font-weight: bold;
      color: #eeeeee;
      border-bottom: 2px dotted #99B5B3;
      text-shadow: 2px 2px 2px #000000;

    }

    .msg {
      padding: 5px;
      margin: 0;
    }

    input[type="submit"] {
      background-color: #99B5B3;
      padding: 4px;
      font-size: 13px;
      text-transform: uppercase;
      box-shadow: 1px 1px black;
    }
    @media (max-width: 768px) {
        .sidebar{
            display: none;
        }
        .content{
            margin-left: 0;
            max-width: 90%;
        }
    }
  </style>
</HEAD>

<BODY>
  <div class="container">
    <div class="sidebar">
      <div class="title"></div>

      <div class="sidecase">
      </div>
    </div>
  </div>

	<div class ="content">