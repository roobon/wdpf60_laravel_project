<?php

namespace App\Http\Controllers\backend;

use App\Http\Controllers\Controller;
use App\Models\Department;
use Illuminate\Http\Request;

class DepartmentController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $items = Department::all();
        return view('backend.department.manageDept', compact('items'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //echo $request->input('data');
        parse_str($request->input('data'), $formData);
        
        $dept = new Department;

        $dept->name = $formData['name'];
        $dept->details = $formData['details'];
        $dept->save();
        //echo $request->name;
        //echo "Hello World";
        //dd($request->data);
        //Department::Create(['name' => $request->name, 'details' => $request->details]);        

        //return response()->json(['success'=>'Department created successfully.']);
        echo 'Department created successfully.';
    }

    /**
     * Display the specified resource.
     */
    public function show(Department $department)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Department $department)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Department $department)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Department $department)
    {
        //
    }
}
