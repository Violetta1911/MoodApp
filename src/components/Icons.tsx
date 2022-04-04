import React from "react";
import{ Svg, Path, Rect, Polygon} from "react-native-svg";


type IconProps = {
    size?: number,
    color?: string
}

export const HomeIcon: React.FC<IconProps> = ({size = 40, color = 'teal'}) => {
    return <Svg fill = {color} viewBox="0 0 24 24" width={size} height={size}><Path d="M13.768,1.147a2.5,2.5,0,0,0-3.536,0L0,11.38V21a3,3,0,0,0,3,3H21a3,3,0,0,0,3-3V11.38ZM21,21H16V17.818A3.818,3.818,0,0,0,12.182,14h-.364A3.818,3.818,0,0,0,8,17.818V21H3V12.622l9-9,9,9Z"/></Svg>
} 

export const HistoryIcon: React.FC<IconProps> = ({size = 40, color = 'teal'}) => {
    return <Svg viewBox="0 0 24 24" width={size} height={size} fill={color}>
        <Path d="M1,6H23a1,1,0,0,0,0-2H1A1,1,0,0,0,1,6Z"/>
        <Path d="M23,9H1a1,1,0,0,0,0,2H23a1,1,0,0,0,0-2Z"/>
        <Path d="M23,19H1a1,1,0,0,0,0,2H23a1,1,0,0,0,0-2Z"/>
        <Path d="M23,14H1a1,1,0,0,0,0,2H23a1,1,0,0,0,0-2Z"/>
    </Svg>
} 

export const AnaliticsIcon: React.FC<IconProps> = ({size = 20, color = 'teal'}) => {
    return <Svg viewBox="0 0 24 24" width={size} height={size} fill={color}>
        <Path d="M3,21.976a1,1,0,0,1-1-1V0H0V20.976a3,3,0,0,0,3,3H24v-2Z"/>
        <Rect x="5" y="12" width="2" height="7"/>
        <Rect x="10" y="10" width="2" height="9"/>
        <Rect x="15" y="13" width="2" height="6"/>
        <Rect x="20" y="9" width="2" height="10"/>
        <Polygon points="11 4.414 16 9.414 23.707 1.707 22.293 0.293 16 6.586 11 1.586 5.293 7.293 6.707 8.707 11 4.414"/>
        </Svg>
} 