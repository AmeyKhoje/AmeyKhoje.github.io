import { useSpring, easings } from '@react-spring/web';

interface Props {
  initAnimation: object;
  photoAnimation: object;
  designationAnimation: object;
}

const BannerAnimationProvider = <T extends Props = Props>(
  WrappedComponent: React.ComponentType<T>
) => {
  const Component = (props: any) => {
    const [initAminationProps] = useSpring(
      () => ({
        from: {
          transform: 'translateX(0)',
          scale: '4',
        },
        to: {
          transform: 'translateX(0)',
          scale: '1',
        },
        config: {
          duration: 2000,
          easing: easings.linear,
        },
      }),
      []
    );
    const [designationAnimationProps] = useSpring(
      () => ({
        from: {
          opacity: 0,
          marginBottom: '-20rem',
        },
        to: {
          opacity: 1,
          marginBottom: '0',
        },
        config: {
          duration: 700,
        },
        delay: 2500,
      }),
      []
    );

    const [photoAnimationProps] = useSpring(
      () => ({
        from: {
          opacity: 0,
          transform: 'rotate(180deg)',
        },
        to: {
          opacity: 1,
          transform: 'rotate(-8deg)',
        },
        config: {
          easing: easings.linear,
          duration: 1000,
        },
        delay: 2200,
      }),
      []
    );
    return (
      <WrappedComponent
        {...props}
        initAnimation={initAminationProps}
        photoAnimation={photoAnimationProps}
        designationAnimation={designationAnimationProps}
      />
    );
  };

  return Component;
};

export default BannerAnimationProvider;
