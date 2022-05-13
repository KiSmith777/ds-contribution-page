
import styled from 'styled-components';

export const ProgressBarContainer = styled.div`
    margin: 20px 0;
    display: flex;
    width: 100%;
    border: 0;
    border-radius: 20px;
    background: #e5e5e5;
    color: #888;
    font-size: 18px;
    overflow: hidden;
    position: relative;
    text-align: center;
    align-items: center;
    height: 36px;
`

export const TextWrapper = styled.div`
    display: flex;
    width: 100%;
    white-space: nowrap;
`

export const Label = styled.div`
    flex: 1 1 50%;
    padding: 0 0.6em;

    &.left-label {
        text-align: left;
    }
    &.right-label {
        text-align: right
    }
`

export const ProgressBarSlider = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: ${({ progress }) => progress + '%'};
    overflow: hidden;
    display: flex;
    max-width: 100%;
`
export const SliderBg = styled.div`
    display: flex;
    width: 103.09278350515463%;
    text-align: center;
    background: linear-gradient(to right,#7f00ff,#e100ff);
    color: #fff;
    height: 100%;
    align-items: center;
`


export const LabelContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    position: absolute;
    display: flex;
    text-transform: uppercase;
    font-size: 24px;
    font-weight: bold;
    color: #f5f5f5;
    text-shadow: 0px .5px #000, 0.5px 1px #000, 1px 1.5px #000,
    1.5px 2px #000, 2px 2.5px #000, 2.5px 3px #000;
    `

export const LabelText = styled.div`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    color: #cf1b1b;
    font-size: 24px;
    letter-spacing: 8px;
    cursor: pointer;
    z-index: 45;

    &.left-label {
        margin-left: 8px;
    }
    &.right-label {
        margin-right: 8px;
    }
`

export const ProgressSliderContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: 37%
    max-width: 100%;
    overflow: hidden;
`

export const FrontLabelContainer = styled.div`
    display: flex;
    width: 103.09278350515463%;
    text-align: center;
    box-shadow: inset 0 0 40px whitesmoke, inset 20px 0 80px #f0f, inset -20px 0 80px #0ff, inset 20px 0 300px #8b00ff, inset -20px 0 300px #0ff, 0 0 50px #fff, 10px 0 80px #f0f, 10px 0 80px #0ff;
    color: #fff;
    font-weight: bold;
    height: 100%;
    align-items: center;
    box-sizing: border-box;

`

export const SliderStyle = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    position: absolute;
    display: flex;
    text-transform: uppercase;
    font-size: 24px;
    font-weight: bold;
    color: #f5f5f5;
    text-shadow: 0px .5px #000, 0.5px 1px #000, 1px 1.5px #000,
    1.5px 2px #000, 2px 2.5px #000, 2.5px 3px #000;
    `