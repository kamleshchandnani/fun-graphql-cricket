import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { compose, graphql } from 'react-apollo';
import styled from 'styled-components';
import Card from 'leaf-ui/Card/web';
import Size from 'leaf-ui/Size/web';
import Space from 'leaf-ui/Space/web';
import View from 'leaf-ui/View/web';
import Text from 'leaf-ui/Text/web';
import Image from 'leaf-ui/Image/web';
import Position from 'leaf-ui/Position/web';
import Flex from 'leaf-ui/Flex/web';
import * as subscriptions from '../matchSubscriptions';
import * as queries from '../matchQueries';
import iplLogo from '../../resources/ipl.png';
import '../../resources/csk.png';
import '../../resources/rcb.png';

const imagePath = `${__PUBLIC_PATH__}images/`;

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

const MatchCard = (props) => {
  const { matchQuery } = props;

  useEffect(() => {
    const unsubscribeMatchUpdates = matchQuery.subscribeToMore({
      document: subscriptions.MATCH_UPDATES_SUBSCRIPTION,
      variables: {
        matchId: '1',
      },
      updateQuery: (previousResult, { subscriptionData }) => {
        if (!subscriptionData.data) return previousResult;

        return {
          ...previousResult,
          matchById: {
            ...previousResult.matchById,
            ...subscriptionData.data.matchUpdates,
          },
        };
      },
    });

    return () => unsubscribeMatchUpdates();
  });

  if (matchQuery.loading) {
    return <div>Loading Match..</div>;
  }

  const match = matchQuery.matchById;
  const matchName = matchQuery.matchById.teams.map((team) => team.name.toUpperCase());

  return (
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
              <Image src={iplLogo} width="100px" height="55px" alt="ipl" />
            </Space>
            <StyledText fontSize="32px">{matchName.join(' vs ')}</StyledText>
          </StyledMatchCard>
        </Size>
        <Size width="850px" height="400px">
          <Card elevated>
            <Flex flexDirection="row" justifyContent="space-around">
              <Space margin={[10, 0, 0, 0]}>
                <View>
                  {
                    match.teams.map((team, index) => (
                      <React.Fragment key={team.id}>
                        {
                          index === 0 ? (
                            <Image src={`${imagePath}${team.imageUrl}`} width="200px" height="200px" alt="ipl" />
                          ) : null
                        }
                        <Flex>
                          <View>
                            {
                              match.innings.map((inning) => {
                                if (inning.battingTeam.id === team.id) {
                                  return (
                                    <React.Fragment>
                                      <Space margin={[7, 5, 0, 0]}>
                                        <StyledText align="center" weight="bold" fontSize="60px">
                                          {`${inning.score.runs}/${inning.score.wickets}`}
                                        </StyledText>
                                      </Space>
                                      <Space margin={[3, 5, 0, 0]}>
                                        <StyledText align="center" weight="medium" fontSize="24px">Overs: {parseFloat(inning.score.balls / 6).toFixed(1)}</StyledText>
                                      </Space>
                                    </React.Fragment>
                                  );
                                }

                                return null;
                              })
                            }
                          </View>
                        </Flex>
                        {
                          index !== 0 ? (
                            <Image src={`${imagePath}${team.imageUrl}`} width="200px" height="200px" alt="ipl" />
                          ) : null
                        }
                      </React.Fragment>
                      ))
                    }
                </View>
              </Space>
            </Flex>
          </Card>
        </Size>
      </View>
    </Position>
  );
};

MatchCard.propTypes = {
  matchQuery: PropTypes.object.isRequired,
};

export default compose(
  graphql(queries.MATCH_QUERY, {
    name: 'matchQuery',
    options: () => ({
      variables: {
        matchId: '1',
      },
    }),
  }),
)(MatchCard);
