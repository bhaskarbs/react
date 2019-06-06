import Header from './Header3';

const layoutStyle = {
    margin: 20,
    padding: 20,
    border: '1px solid #DDD'
};

const Layout = props => (
    <div style={layoutStyle}>
        <Header />
        {props.content}
    </div>
);

export default Layout;