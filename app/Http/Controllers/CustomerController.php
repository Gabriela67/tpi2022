<?php

namespace App\Http\Controllers;

use App\Models\Customer;
use Illuminate\Http\Request;

class CustomerController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $respuesta = json_decode(Customer::UsuariosJson(), true);
        return response()->json($respuesta);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $User = json_decode(Customer::UsuariosJson() ,true);
        $newUser =array(
            "nombre"=>$request->nombre,
            "apellido"=>$request->apellido,
            "edad"=>$request->edad,
            "telefono"=>$request->telefono,
            "email"=>$request->email,
            "password"=>$request->password,
            "cargo"=>$request->cargo,
            "nacionalidad"=>$request->nacionalidad,
            
        );
        array_push($User['usuarios'], $newUser);
        $data = json_encode($User);
        file_put_contents('../users.json',$data);
        return redirect()->route("index.Customer");
    }

    public function nuevo (){
        return view('usernuevo');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Customer  $Customer
     * @return \Illuminate\Http\Response
     */
    public function showUser($id)
    {
        //
        $respuesta =json_decode(Customer::UsuariosJson(),true);
        return response()->json($respuesta['usuarios'][$id]);

    }

    public function showUserSaludo($id)
    {
        //
        $respuesta =json_decode(Customer::UsuariosJson(),true);
        $User = $respuesta['usuarios'][$id];
        $arrUser = array(
            $User,
            'Saludo'=>'Hola Bienvenido . te extrano ' .$User ['nombre'],
        );
        return response()->json($arrUser);

    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Customer  $Customer
     * @return \Illuminate\Http\Response
     */
    public function edit(Customer $Customer)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Customer  $Customer
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Customer $Customer)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Customer  $Customer
     * @return \Illuminate\Http\Response
     */
    public function destroy(Customer $Customer)
    {
        //
    }
}
