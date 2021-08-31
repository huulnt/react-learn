import { Fragment } from 'react';
import ReactDOM from 'react-dom';
import classes from './modal.module.css';

const BackDrop = () => {
    return <div className={classes.backdrop} />
}

const ModelOverlays = (props) => {
    return <div className={classes.modal}>
        <div className={classes.content}>{props.children}</div>
    </div>
}

const portalElement = document.getElementById('overlays');

const Modal = (props) => {
    return <Fragment>
        {ReactDOM.createPortal(<BackDrop />, portalElement)}
        {ReactDOM.createPortal(<ModelOverlays>{props.children}</ModelOverlays>, portalElement)}
    </Fragment>
}

export default Modal