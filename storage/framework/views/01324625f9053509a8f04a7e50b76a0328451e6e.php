


<form action="<?php echo e(route('persona.store')); ?>" method="post">
<?php echo csrf_field(); ?>
<label for="nombre">Nombre</label>
<input type="text" name="nombre", id="nombre">
<label for="apellido">Apellido</label>
<input type="text" name="apellido", id="apellido">
<label for="edad">Edad</label>
<input type="number" name="edad", id="edad">
<label for="telefono">Telefono</label>
<input type="text" name="telefono", id="telefono">
<label for="email">Email</label>
<input type="text" name="email", id="email">
<input type="text" name="password", id="password">
<label for="cargo">Cargo</label>
<input type="text" name="cargo", id="cargo">
<label for="nacionalidad">Nacionalidad</label>
<input type="text" name="nacionalidad", id="nacionalidad">
<button type="submit">Guardar</button>
</form><?php /**PATH C:\Users\san miguel\prueba1.0\resources\views/usernuevo.blade.php ENDPATH**/ ?>