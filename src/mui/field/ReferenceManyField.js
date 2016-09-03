import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import LinearProgress from 'material-ui/LinearProgress';
import { crudGetManyReference as crudGetManyReferenceAction } from '../../actions/dataActions';
import { getReferences } from '../../reducer/references/oneToMany';
import Datagrid from '../list/Datagrid';

const relatedTo = (reference, id, resource, target) => `${resource}_${reference}@${target}_${id}`;

/**
 * @example
 * <ReferenceManyField reference="comments" target="post_id">
 *     <TextField source="id" />
 * </ReferenceManyField>
 */
export class ReferenceManyField extends Component {
    componentDidMount() {
        this.props.crudGetManyReference(this.props.reference, this.props.target, this.props.record.id, relatedTo(this.props.reference, this.props.record.id, this.props.resource, this.props.target));
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.record.id !== nextProps.record.id) {
            this.props.crudGetManyReference(nextProps.reference, nextProps.target, nextProps.record.id, relatedTo(nextProps.reference, nextProps.record.id, nextProps.resource, nextProps.target));
        }
    }

    render() {
        const { resource, reference, referenceRecords, children, basePath } = this.props;
        if (React.Children.count(children) > 1) {
            throw new Error('<ReferenceManyField> only accepts a single child');
        }
        const referenceBasePath = basePath.replace(resource, reference); // FIXME obviously very weak
        return (<div style={{ marginTop: '2em' }}>
            {typeof referenceRecords === 'undefined' ?
                <LinearProgress /> :
                Object.keys(referenceRecords).map(index => {
                    const props = { ...children.props, record: referenceRecords[index], resource, basePath: referenceBasePath };
                    return <children.type {...props} />;
                })
            }
        </div>);
    }
}

ReferenceManyField.propTypes = {
    resource: PropTypes.string.isRequired,
    record: PropTypes.object,
    reference: PropTypes.string.isRequired,
    target: PropTypes.string.isRequired,
    referenceRecords: PropTypes.object,
    basePath: PropTypes.string.isRequired,
    children: PropTypes.element,
    crudGetManyReference: PropTypes.func.isRequired,
};

function mapStateToProps(state, props) {
    return {
        referenceRecords: getReferences(state, props.reference, relatedTo(props.reference, props.record.id, props.resource, props.target)),
    };
}

export default connect(mapStateToProps, {
    crudGetManyReference: crudGetManyReferenceAction,
})(ReferenceManyField);
