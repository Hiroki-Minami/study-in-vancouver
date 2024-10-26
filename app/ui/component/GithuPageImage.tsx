import Image from 'next/image';

interface GithubPageImageProps extends React.ComponentProps<typeof Image> {
  src: string;
}

const GithubPageImage: React.FC<GithubPageImageProps> = ({ src, ...props }) => {
  const basePath =  process.env.IMAGE_BASE_PATH || '';
  console.log(basePath)
  if (!src.startsWith("https")) {
    return <Image src={`${basePath}${src}`} {...props} />;
  } else {
    return <Image src={`${src}`} {...props} />;
  }
};

export default GithubPageImage;