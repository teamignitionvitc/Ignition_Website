import { Text } from "@react-three/drei"

export const TextSection = ({title, subtitle, ...props}) => {
    return (
        <>
        <group {...props}>
      <Text color="white" anchorX="left" anchorY="center" fontSize={1.5} maxWidth={6} font={"./fonts/DMSerifDisplay-Regular.ttf"}>
        {title}
          </Text>
        <Text color="white" anchorX="left" anchorY="top" position-y={-2} fontSize={0.5} maxWidth={10}>
        {subtitle}
          </Text>
          </group>
          </>
    )
}