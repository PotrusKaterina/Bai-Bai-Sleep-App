import React, { Component } from 'react';
import { Modal } from 'react-native';
import { getPopupContent } from './popupApi';
import { connect } from 'react-redux';
import { setContent, clear } from './redux/popupAction';
import { setSoundSleeperMode } from '../../views/soundSleeperScreen/redux/soundSleeperSortActions';

export class PopupApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            content: null,
            isVisible: false,
        }
    }

    static getDerivedStateFromProps(nextProps) {
        const { type, setContent, setSoundSleeperMode } = nextProps;
        const result = { content: null, isVisible: false };
        if (type) {
            result.content = getPopupContent(type, setContent, setSoundSleeperMode);
            result.isVisible = true;
        }
        return result;
    }

    render() {
        const { isVisible, content } = this.state;
        return (
            <Modal visible={isVisible} animationType="fade" transparent >
                {content}
            </Modal>
        );
    }
}

const mapStateToProps = (store) => ({
    type: store.modal.type,
});

const mapDispatchToProps = {
    setContent,
    setSoundSleeperMode,
};

export default connect(mapStateToProps, mapDispatchToProps)(PopupApp);