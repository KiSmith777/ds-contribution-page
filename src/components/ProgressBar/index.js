import React, { useContext } from 'react';
import {
    ProgressBarContainer,
    Label,
    TextWrapper,
    ProgressBarSlider,
    SliderBg
} from './ProgressBarElements';
import { EthersContext } from '../../context/EthersContext';

const ProgressBar = () => {

    const { progress } = useContext(EthersContext);

    return (
        <>
            <ProgressBarContainer>
                <TextWrapper>
                    <Label className="left-label">0</Label>
                    <Label className="right-label">250</Label>
                </TextWrapper>

                <ProgressBarSlider progress={progress}>
                    <SliderBg>
                        <TextWrapper>
                            <Label className="left-label">0</Label>
                            <Label className="right-label">{progress}%</Label>
                        </TextWrapper>
                    </SliderBg>
                </ProgressBarSlider>
            </ProgressBarContainer>
        </>
    )
}

export default ProgressBar;
