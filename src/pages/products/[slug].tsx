import React from 'react';
import { useRouter } from 'next/router';
import products from '@/util/products';
import { Button, Collapse, Text, Tooltip } from '@nextui-org/react';
import { BsArrowLeftCircle, BsArrowRightCircle } from 'react-icons/bs';

const Zoom = ({ src }: { src: string }) => {
  const [zoom, setZoom] = React.useState({
    backgroundImage: `url(${src})`,
    backgroundPosition: '0% 0%',
  });
  React.useEffect(() => {
    setZoom({
      backgroundImage: `url(${src})`,
      backgroundPosition: '0% 0%',
    });
  }, [src]);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    const node = e?.target as HTMLElement;
    const { left, top, width, height } = node.getBoundingClientRect();
    const x = ((e.pageX - left) / width) * 100;
    const y = ((e.pageY - top) / height) * 100;
    setZoom({ ...zoom, backgroundPosition: `${x}% ${y}%` });
  };

  return (
    <figure
      className='group bg-no-repeat border'
      onMouseMove={(e) => handleMouseMove(e)}
      style={zoom}
    >
      <img
        className='group-hover:opacity-0 pointer-events-none block w-full'
        src={src}
      />
    </figure>
  );
};

const TooltipCard = ({ id }: { id: number }) => {
  const product = products.filter((product) => product.id === Number(id))[0];
  return (
    <div className="flex items-center gap-1 min-w-[8rem]">
      <div>
        <img src={product?.url} alt="" />
      </div>
      <div className="text-xs">{product?.caption.slice(0, 20)}...</div>
    </div>
  );
};

const Car = () => {
  const { isBrowser } = useSSR();
  const router = useRouter();
  const { slug } = router.query;
  const product = products.filter((product) => product.id === Number(slug))[0];

  return (
    <div className='my-16'>
      <div className='flex flex-col md:flex-row items-start [&>div]:mx-8 gap-4'>
        <div className='md:w-1/2'>
          <Zoom src={product?.url} />
        </div>
        <div className='md:w-1/2 '>
          <div className='md:w-3/4'>
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
                  <BsArrowLeftCircle />
                </Tooltip>
                <Tooltip
                  onClick={() => router.push(`/products`)}
                  placement='top'
                  content={
                    <div className='p-2 text-xs'>Alışverişe geri dön</div>
                  }
                >
                  <svg
                    width='20px'
                    height='20px'
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
<<<<<<< HEAD
                  placement="bottomStart"
=======
                  placement='bottomEnd'
>>>>>>> 4ade32bfedc661c21761af26d464b8f1e88ed3a0
                  content={
                    <TooltipCard
                      id={
                        product?.id + 1 <= products.length ? product?.id + 1 : 1
                      }
                    />
                  }
                >
                  <BsArrowRightCircle />
                </Tooltip>
              </div>
            </div>
<<<<<<< HEAD
            <hr className="mt-4 mb-6" />
            <div>{product?.shortDescription}</div>
            <Button
              size={"lg"}
              color={"default"}
              css={{ w: "stretch", mt: "$15", borderRadius: "0" }}
            >
              Satın Al
            </Button>
            <div className="flex text-sm">
              <div className="pr-2">Kategoriler:</div>
              <div className="text-gray-500">{product?.category}</div>
            </div>
          </div>
        </div>
        <div>
          <div className="text-center w-fit mx-auto font-semibold">
            <div className="py-[10px]">Açıklama</div>
            <hr className="border border-black " />
          </div>
          <div className="m-8 p-4 border">
            <Collapse.Group>
              <Collapse title="Option A" expanded>
                <Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </Text>
              </Collapse>
              <Collapse title="Option B">
                <Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </Text>
              </Collapse>
              <Collapse title="Option C">
                <Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </Text>
              </Collapse>
            </Collapse.Group>
=======
            <hr className='mt-4 mb-6 border-black' />
            <div className='text-red-600'>{product?.shortDescription}</div>
            <Button
              size={'lg'}
              color={'default'}
              css={{ w: 'stretch', mt: '$15', borderRadius: '0' }}
            >
              Satın Al
            </Button>
            <div className='flex text-sm mt-1'>
              <div className='pr-2'>Kategoriler:</div>
              <div className='text-gray-500'>{product?.category}</div>
            </div>
>>>>>>> 4ade32bfedc661c21761af26d464b8f1e88ed3a0
          </div>
        </div>
      </div>
    );
  } else {
    return <div></div>;
  }
  // else return <div></div>;
};

export default Car;
