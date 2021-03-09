import { Link, useLocation } from "react-router-dom";
import { Menu } from 'antd';
import { ShrinkOutlined, LineChartOutlined } from '@ant-design/icons';
import { PATHES } from "@utils/consts";

import "./Navigation.scss";

const Navigation = () => {
    const location = useLocation();
    const { pathname } = location;
    const defaultSelectedKey = pathname === "/rates" ? "rates" : "converter";

    const menuItems = PATHES.map((path) => {
        const { to, key, title } = path;

        return (
            <Menu.Item
                key={key}
                icon={key === "rates" ? <LineChartOutlined style={{ fontSize: '20px' }} /> : <ShrinkOutlined style={{ fontSize: '20px' }} />}>
                <Link to={to} className="item-title">{title}</Link>
            </Menu.Item>
        )
    });

    return (
        <Menu mode="horizontal" className="navigation-wrapper" defaultSelectedKeys={defaultSelectedKey}>
            {menuItems}
        </Menu>
    )
}

export default Navigation;