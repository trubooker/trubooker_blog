export const contactTemplate = `
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <style>
    p {
      text-align: justify;
    }

    a {
      text-decoration: none;
      color: #83B335
    }

    span {
      color: #9CB974;
      font-weight: bolder;
    }

    .grid-container {
      display: grid;
      grid-template-rows: 1fr;
      grid-template-columns: 1fr;
      gap: 5px;
    }


    .text-base-lg {
      font-size: 16px;
    }


    /* Flex item styling */
    .flex-item {
      display: flex;
      gap: 12px;
      align-items: center;
    }

    /* Icon primary color */
    .icon-primary {
      color: var(--primary);
      margin-bottom: 4px;
    }

    .message {
      color: black;
      font: bolder;
      font-size: large;
    }

    .message-text {
      width: fit-content;
      text-justify: auto;
    }
  </style>
</head>

<body>
  <div>
    <div class="">
      <div class="grid-container text-base-lg">
        <p class="flex-item">
          Name: {{firstName}} {{lastName}}
        </p>
        <p class="flex-item">
          <div>Email<div>
          {{email}}
        </p>
      </div>
    </div>
    <div>
      <p class="message">
        Message
      </p>
      <p class="message-text">{{message}}</p>
    </div>
  </div>
</body>

</html>
`;
