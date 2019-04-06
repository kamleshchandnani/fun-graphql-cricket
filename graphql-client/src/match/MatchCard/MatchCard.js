import React from 'react';
import styled from 'styled-components';
import Card from 'leaf-ui/Card/web';
import Size from 'leaf-ui/Size/web';
import Space from 'leaf-ui/Space/web';
import View from 'leaf-ui/View/web';
import Text from 'leaf-ui/Text/web';
import Image from 'leaf-ui/Image/web';
import Position from 'leaf-ui/Position/web';
import Flex from 'leaf-ui/Flex/web';
import IplLogo from '../../resources/ipl.png';
import CskLogo from '../../resources/csk.png';
import RcbLogo from '../../resources/rcb.png';

const StyledMatchCard = styled(Card)`
  color: white;
  background-color: #223577;
  border-color: #223577;
  display: flex;
  align-items: center;
`;

const StyledText = styled(Text)`
  font-size: ${(props) => props.fontSize};
`;

const MatchCard = () => (
  <Position
    position="absolute"
    left="50%"
    top="50%"
    transform="translate(-50%, -50%)"
  >
    <View>
      <Size width="850" height="100px">
        <StyledMatchCard elevated>
          <Space margin={[1, 28, 1, 1]}>
            <Image src={IplLogo} width="100px" height="55px" alt="ipl" />
          </Space>
          <StyledText fontSize="32px">RCB vs CSK</StyledText>
        </StyledMatchCard>
      </Size>
      <Size width="850px" height="400px">
        <Card elevated>
          <Flex flexDirection="row" justifyContent="space-around">
            <Space margin={[10, 0, 0, 0]}>
              <View>
                <Image src={CskLogo} width="200px" height="200px" alt="ipl" />
                <Flex>
                  <View>
                    <Space margin={[7, 5, 0, 0]}>
                      <StyledText align="center" weight="bold" fontSize="60px">150/5</StyledText>
                    </Space>
                    <Space margin={[3, 5, 0, 0]}>
                      <StyledText align="center" weight="medium" fontSize="24px">Overs: 12.6</StyledText>
                    </Space>
                  </View>
                </Flex>
                <Flex>
                  <View>
                    <Space margin={[7, 0, 0, 5]}>
                      <StyledText color="grey" align="center" weight="bold" fontSize="60px">200</StyledText>
                    </Space>
                    <Space margin={[3, 0, 0, 5]}>
                      <StyledText color="grey" align="center" weight="medium" fontSize="24px">Overs: 20</StyledText>
                    </Space>
                  </View>
                </Flex>
                <Image src={RcbLogo} width="200px" height="200px" alt="ipl" />
              </View>
            </Space>
          </Flex>
        </Card>
      </Size>
    </View>
  </Position>
);

export default MatchCard;
