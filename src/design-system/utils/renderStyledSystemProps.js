import { merge } from 'lodash';
import { styles } from 'styled-system';

export const renderStyledSystemProps = (styledSystemPropObject = {}) => (props = {}) =>
  Object.entries(styledSystemPropObject).reduce((styleObject, [propKey, propValue]) => {
    if (styles[propKey]) {
      return merge(styleObject, styles[propKey]({ [propKey]: propValue, ...props }));
    }
    if (['color', 'bg'].includes(propKey)) {
      return merge(styleObject, styles.color({ [propKey]: propValue, ...props }));
    }
    if (
      [
        'm', 'mt', 'mr', 'mb', 'ml', 'mx', 'my',
        'p', 'pt', 'pr', 'pb', 'pl', 'px', 'py'
      ].includes(propKey)) {
      return merge(styleObject, styles.space({ [propKey]: propValue, ...props }));
    }
    return styleObject;
  }, {});
