## Comandos básicos:

Para arquivo específico:

```
sass --watch <input> <output>

sass --watch ./styles/sass/arquivo.scss ./styles/css/arquivo.css
```

Para o monitoramento automático de arquivos EM UMA PASTA:

```
sass --watch <input>:<output>

sass --watch ./styles/sass:./styles/css/
```

No HTML:

ESPECIFICAR SEMPRE O ARQUIVO CSS GERADO

```
<!DOCTYPE html>
<html lang="pt-br">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <link rel="stylesheet" href="./styles/css/styles.css">
</head>

<body>
  <div class="container">
    <button>Enviar</button>
  </div>

  <button>Outro</button>
</body>

</html>
```

## Documentações Bases

SASS:
-> https://sass-lang.com/guide/

NODE
-> https://nodejs.org/en

NVM (Node version manager)
-> https://github.com/nvm-sh/nvm
