@extends('layouts.app')

@section('content')
    <show-user-page :user="{{$user}}"></show-user-page>
@endsection
