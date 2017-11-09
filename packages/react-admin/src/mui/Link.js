import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Link as RRLink } from 'react-router-dom';
import { withStyles } from 'material-ui/styles';

const styles = theme => ({
    link: {
        textDecoration: 'none',
        color: theme.palette.primary[500],
    },
});
const Link = ({ to, children, className, classes }) => (
    <RRLink to={to} className={classNames(classes.link, className)}>
        {children}
    </RRLink>
);
Link.propTypes = {
    className: PropTypes.string,
    classes: PropTypes.object,
    to: PropTypes.string,
};

export default withStyles(styles)(Link);
