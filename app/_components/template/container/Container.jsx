export const Container = ({container='', children}) => {
    return (
        <div className={`${container}`+ 'container'}>{children}</div>
    )
}
