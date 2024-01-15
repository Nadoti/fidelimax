import { notification } from '@/utils/notification';
import axios from 'axios'

interface FormProps {
  name: string
}

export async function sendFakePostApi(form: FormProps) {
  try {
    const response = await axios.post('https://jsonplaceholder.typicode.com/posts');
    notification({message: 'Formulário enviado com sucesso', title: 'Enviado', type: 'success'})
    return response.data;
  } catch (error) {
    throw error;
  }
};
