import { Switch, Route } from "react-router-dom";
import { Converter, Rates } from '@containers';
import { PATHES } from "@utils/consts";

const Routes = () => {
    const routes = PATHES.map((path, index) => {
        const { to } = path;

        return <Route key={index} exact path={to} component={to === "/rates" ? Rates : Converter} />
    });

    return (
        <Switch>
            {routes}
            <Route path='*' exact component={Converter} />
        </Switch>
    );
}

export default Routes;