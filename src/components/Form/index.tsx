import React, { useState } from 'react';

interface MessageFormData {
  name: string;
  phoneNumber: string;
  email: string;
  message: string;
}

const MessageForm: React.FC = () => {
  const [formData, setFormData] = useState<MessageFormData>({
    name: '',
    phoneNumber: '',
    email: '',
    message: '',
  });

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    // Here you can add your code to send the message using the formData
    console.log(formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className='[&_input]:border [&_input]:border-black [&_input]:p-2 flex flex-col gap-2'
    >
      <input
        type='text'
        id='name'
        name='name'
        value={formData.name}
        onChange={handleInputChange}
        required
        placeholder='Adınız Soyadınız'
      />

      <input
        type='email'
        id='email'
        name='email'
        value={formData.email}
        onChange={handleInputChange}
        required
        placeholder='E-posta Adresiniz'
      />
      <input
        type='tel'
        id='phoneNumber'
        name='phoneNumber'
        value={formData.phoneNumber}
        onChange={handleInputChange}
        required
        placeholder='Telefon Numaranız'
      />

      <textarea
        id='message'
        name='message'
        value={formData.message}
        onChange={handleInputChange}
        required
        placeholder='Mesajınız'
        className='border border-black p-2'
      />

      <button
        type='submit'
        className='p-6 py-3 text-white bg-black text-sm w-40 mx-auto md:mx-0'
      >
        Gönder
      </button>
    </form>
  );
};

export default MessageForm;
