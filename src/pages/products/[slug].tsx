import React, { useContext } from 'react';
import { useRouter } from 'next/router';
import products from '@/util/products';
import { Button, Collapse, Text, Tooltip } from '@nextui-org/react';

const TooltipCard = ({ id }: { id: number }) => {
  const product = products.filter((product) => product.id === Number(id))[0];
  return (
    <div className='flex items-center gap-1 min-w-[8rem]'>
      <div>
        <img src={product?.url} alt='' />
      </div>
      <div className='text-xs'>{product?.caption.slice(0, 20)}...</div>
    </div>
  );
};

const Car = () => {
  const router = useRouter();
  const { slug } = router.query;
  const product = products.filter((product) => product.id === Number(slug))[0];
  return (
    <div className='my-16'>
      <div className='flex flex-col md:flex-row items-start [&>div]:mx-8 gap-4'>
        <div className='md:w-1/2 relative overflow-hidden'>
          <img
            className='border'
            role={'presentation'}
            // style={{
            //   position: 'absolute',
            //   top: '-500.71px',
            //   left: '-500.432px',
            //   opacity: 0,
            //   width: '1000px',
            //   height: '1000px',
            //   border: 'none',
            //   maxWidth: 'none',
            //   maxHeight: 'none',
            // }}
            src={product?.url}
            alt='product'
          />
        </div>
        <div className='md:w-1/2 '>
          <div className='text-xl font-bold justify-between flex items-center'>
            {product?.caption}{' '}
            <div className='flex gap-2'>
              <Tooltip
                onClick={() =>
                  router.push(
                    `/products/${
                      product?.id - 1 ? product?.id - 1 : products.length
                    }`
                  )
                }
                placement='bottomEnd'
                content={
                  <TooltipCard
                    id={product?.id - 1 ? product?.id - 1 : products.length}
                  />
                }
              >
                <svg
                  width='24px'
                  height='24px'
                  viewBox='0 0 24 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <circle
                    cx='12'
                    cy='12'
                    r='11'
                    fill='#FFFFFF'
                    stroke='#000000'
                    strokeWidth='2'
                  />
                  <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M11.7071 4.29289C12.0976 4.68342 12.0976 5.31658 11.7071 5.70711L6.41421 11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H6.41421L11.7071 18.2929C12.0976 18.6834 12.0976 19.3166 11.7071 19.7071C11.3166 20.0976 10.6834 20.0976 10.2929 19.7071L3.29289 12.7071C3.10536 12.5196 3 12.2652 3 12C3 11.7348 3.10536 11.4804 3.29289 11.2929L10.2929 4.29289C10.6834 3.90237 11.3166 3.90237 11.7071 4.29289Z'
                    fill='#000000'
                  />
                </svg>
              </Tooltip>
              <Tooltip
                onClick={() => router.push(`/products`)}
                placement='top'
                content={<div className='p-2 text-xs'>Alışverişe geri dön</div>}
              >
                <svg
                  width='24px'
                  height='24px'
                  viewBox='0 0 24 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M13 15C13 14.0572 13 13.5858 13.2929 13.2929C13.5858 13 14.0572 13 15 13H17C17.9428 13 18.4142 13 18.7071 13.2929C19 13.5858 19 14.0572 19 15V17C19 17.9428 19 18.4142 18.7071 18.7071C18.4142 19 17.9428 19 17 19H15C14.0572 19 13.5858 19 13.2929 18.7071C13 18.4142 13 17.9428 13 17V15Z'
                    stroke='#464455'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  />
                  <path
                    d='M13 7C13 6.05719 13 5.58579 13.2929 5.29289C13.5858 5 14.0572 5 15 5H17C17.9428 5 18.4142 5 18.7071 5.29289C19 5.58579 19 6.05719 19 7V9C19 9.94281 19 10.4142 18.7071 10.7071C18.4142 11 17.9428 11 17 11H15C14.0572 11 13.5858 11 13.2929 10.7071C13 10.4142 13 9.94281 13 9V7Z'
                    stroke='#464455'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  />
                  <path
                    d='M5 15C5 14.0572 5 13.5858 5.29289 13.2929C5.58579 13 6.05719 13 7 13H9C9.94281 13 10.4142 13 10.7071 13.2929C11 13.5858 11 14.0572 11 15V17C11 17.9428 11 18.4142 10.7071 18.7071C10.4142 19 9.94281 19 9 19H7C6.05719 19 5.58579 19 5.29289 18.7071C5 18.4142 5 17.9428 5 17V15Z'
                    stroke='#464455'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  />
                  <path
                    d='M5 7C5 6.05719 5 5.58579 5.29289 5.29289C5.58579 5 6.05719 5 7 5H9C9.94281 5 10.4142 5 10.7071 5.29289C11 5.58579 11 6.05719 11 7V9C11 9.94281 11 10.4142 10.7071 10.7071C10.4142 11 9.94281 11 9 11H7C6.05719 11 5.58579 11 5.29289 10.7071C5 10.4142 5 9.94281 5 9V7Z'
                    stroke='#464455'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  />
                </svg>
              </Tooltip>

              <Tooltip
                onClick={() =>
                  router.push(
                    `/products/${
                      product?.id + 1 <= products.length ? product?.id + 1 : 1
                    }`
                  )
                }
                placement='bottomEnd'
                content={
                  <TooltipCard
                    id={
                      product?.id + 1 <= products.length ? product?.id + 1 : 1
                    }
                  />
                }
              >
                <svg
                  width='24px'
                  height='24px'
                  viewBox='0 0 24 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <circle
                    cx='12'
                    cy='12'
                    r='11'
                    fill='#FFFFFF'
                    stroke='#000000'
                    strokeWidth='2'
                  />
                  <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M12.2929 4.29289C12.6834 3.90237 13.3166 3.90237 13.7071 4.29289L20.7071 11.2929C21.0976 11.6834 21.0976 12.3166 20.7071 12.7071L13.7071 19.7071C13.3166 20.0976 12.6834 20.0976 12.2929 19.7071C11.9024 19.3166 11.9024 18.6834 12.2929 18.2929L17.5858 13H4C3.44772 13 3 12.5523 3 12C3 11.4477 3.44772 11 4 11H17.5858L12.2929 5.70711C11.9024 5.31658 11.9024 4.68342 12.2929 4.29289Z'
                    fill='#000000'
                  />
                </svg>
              </Tooltip>
            </div>
          </div>
          <hr className='mt-4 mb-6' />
          <div className='text-red-600'>{product?.shortDescription}</div>
          <Button
            size={'lg'}
            color={'default'}
            css={{ w: 'stretch', mt: '$15', borderRadius: '0' }}
          >
            Satın Al
          </Button>
          <div className='flex text-sm'>
            <div className='pr-2'>Kategoriler:</div>
            <div className='text-gray-500'>{product?.category}</div>
          </div>
        </div>
      </div>
      <div>
        <div className='text-center w-fit mx-auto font-semibold'>
          <div className='py-[10px]'>Açıklama</div>
          <hr className='border border-black ' />
        </div>
        <div className='m-8 p-4 border'>
          <Collapse.Group>
            <Collapse title='Option A' expanded>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </Text>
            </Collapse>
            <Collapse title='Option B'>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </Text>
            </Collapse>
            <Collapse title='Option C'>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </Text>
            </Collapse>
          </Collapse.Group>
        </div>
      </div>
    </div>
  );
  // else return <div></div>;
};

export default Car;
