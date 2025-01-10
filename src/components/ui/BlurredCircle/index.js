

export const BlurredCircle = ({
  width = 50,
  height = 50,
  position = { top: 0, left: 0 },
  gradient = ['teal-400', 'cyan-500'],
  opacity = 30,
  blur = '3xl',
}) => {
  const { top, left } = position;

    return (
        <div
            // className={`absolute rounded-full bg-gradient-to-r from-${gradient[0]}/${opacity} to-${gradient[1]}/${opacity} blur-${blur}`}
            className={`absolute rounded-full bg-gradient-to-r from-teal-400/30 to-cyan-500/30 blur-3xl`}
            style={{
                width: `${width}%`,
                height: `${height}%`,
                top: `${top}%`,
                left: `${left}%`,
            }}
        >        
        </div>
    )
}

