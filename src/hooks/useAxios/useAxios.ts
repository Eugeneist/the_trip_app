import { useState } from 'react';
import axios from 'axios';

interface ApiResponse<T> {
  data: T;
}

interface ApiError {
  message: string;
}

interface RequestOptions {
  url: string;
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
  data?: any;
  params?: any;
}

const useAxios = () => {};

export default useAxios;
