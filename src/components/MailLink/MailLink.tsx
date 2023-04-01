import React from 'react';
import Link from 'next/link';
type Props = {};

const MailLink = (props: Props) => {
  const mailSubject = 'DESTEK AL';
  const mailBody = 'SORU SORMAK İSTİYORUM.';
  const handleMail = (message: string) => {
    return message.trim().replaceAll(' ', '%20');
  };
  return (
    <Link
      className='hover:underline   hover:text-gray-400'
      href={`mailto:bioprofsatislar@gmail.com?subject=${handleMail(
        mailSubject
      )}&body=${handleMail(mailBody)}`}
    > 
      Mail: bilgi@bioprof.com
    </Link>
  );
};

export default MailLink;
