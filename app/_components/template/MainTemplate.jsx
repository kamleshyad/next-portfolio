export const MainTemplate = ({container='', children}) => {
    return (
        <div className={`${container}`+ 'container'}>{children}</div>
    )
}
