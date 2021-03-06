import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Grow from '@material-ui/core/Grow';
import Typography from '../components/Typography';
import Button from '../components/Button';

export default function ProductHowItWorksMarketerItem(props) {
  const { classes, check } = props;
  return (
    <React.Fragment>
      <Grow
        in={check}
        {...(check ? { timeout: 1500 } : {})}
      >
        <Typography
          variant="h4"
          marked="center"
          align="center"
          className={classes.title}
          component="h2"
        >
            빠르고 쉽게 광고를 집행하고 투명하게 확인하세요
        </Typography>
      </Grow>
      <Grow
        in={check}
        {...(check ? { timeout: 1500 } : {})}
      >
        <div>
          <Grid container spacing={5}>
            <Grid item xs={12} md={4}>
              <div className={classes.item}>
                <div className={classes.number}>1.</div>
                <img
                  src="/images/productValues1.svg"
                  alt="suitcase"
                  className={classes.image}
                />
                <Typography variant="h5" align="center">
                    배너를 등록하고 관련성 매칭을 통해 추천된 크리에이터 목록을 확인하세요.
                </Typography>
              </div>
            </Grid>
            <Grid item xs={12} md={4}>
              <div className={classes.item}>
                <div className={classes.number}>2.</div>
                <img
                  src="/images/productValues2.svg"
                  alt="graph"
                  className={classes.image}
                />
                <Typography variant="h5" align="center">
                    클릭 한번으로 간단하게 광고를 집행하세요.
                </Typography>
              </div>
            </Grid>
            <Grid item xs={12} md={4}>
              <div className={classes.item}>
                <div className={classes.number}>3.</div>
                <img
                  src="/images/productValues3.svg"
                  alt="clock"
                  className={classes.image}
                />
                <Typography variant="h5" align="center">
                  광고가 어떻게 진행되고 있는지, 실시간으로 집행된 금액은 얼마인지, 광고의 효과는 어떻게 되는지 확인하세요.
                </Typography>
              </div>
            </Grid>
          </Grid>
        </div>
      </Grow>
      <Grow
        in={check}
        {...(check ? { timeout: 1500 } : {})}
      >
        <Button
          color="secondary"
          size="large"
          variant="contained"
          className={classes.button}
          component="a"
          href="/dashboard"
        >
        마케터로 시작하기
        </Button>
      </Grow>
    </React.Fragment>
  );
}
ProductHowItWorksMarketerItem.propTypes = {
  classes: PropTypes.object,
  check: PropTypes.bool,
};

ProductHowItWorksMarketerItem.defaultProps = {
  classes: {},
  check: null,
};
