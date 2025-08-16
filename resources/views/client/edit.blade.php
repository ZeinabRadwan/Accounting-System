@extends('layouts.app')

@section('title', trans('default.edit_client'))

@section('contents')
    <client-form :client-id="{{ $client->id }}"></client-form>
@endsection
