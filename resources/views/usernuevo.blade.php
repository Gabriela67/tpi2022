
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"> 
    <title>Document</title>
</head>
<body>
    
</body>
</html>

<form action="{{route('Customer.store')}}" method="post">
@csrf
<div class="container-fluid">
    <h3 class="center">Crear Un Nuevo Cliente</h3>
 <div class="row">
    <div class="col-12">
<label for="nombre">Nombre</label>
<input type="text" name="nombre", id="nombre">
<label for="apellido">Apellido</label>
<input type="text" name="apellido", id="apellido">
<label for="edad">Edad</label>
<input type="number" name="edad", id="edad">
<label for="telefono">Telefono</label>
<input type="text" name="telefono", id="telefono">
</div>
 </div>
 <br>
 <div class="row">
    <div class="col-12">
<label for="email">Email</label>
<input type="text" name="email", id="email">
<label for="cargo">Cargo</label>
<input type="text" name="cargo", id="cargo">
<label for="nacionalidad">Nacionalidad</label>
<input type="text" name="nacionalidad", id="nacionalidad">
<label for="Password">Password</label>
<input type="password" name="password", id="password">
</div>
</div>
<br>

<button type="submit" class="btn btn-primary">Guardar</button>

</form>
</div>