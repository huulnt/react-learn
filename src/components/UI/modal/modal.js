import { Fragment } from 'react';
import ReactDOM from 'react-dom';
import classes from './modal.module.css';

const BackDrop = (props) => {
    return <div className={classes.backdrop} onClick={props.onClose} />
}

const ModelOverlays = (props) => {
    return <div className={classes.modal}>
        <div className={classes.content}>{props.children}</div>
    </div>
}

const portalElement = document.getElementById('overlays');

const Modal = (props) => {
    return <Fragment>
        {ReactDOM.createPortal(<BackDrop onClose={props.onClose}/>, portalElement)}
        {ReactDOM.createPortal(<ModelOverlays>{props.children}</ModelOverlays>, portalElement)}
    </Fragment>
}

export default Modal