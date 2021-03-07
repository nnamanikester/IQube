import React from 'react';
import { TextStyle, View } from 'react-native';
import PropTypes from 'prop-types';
import Menu, { MenuItem } from 'react-native-material-menu';
import { Clickable } from '../Clickable';

interface option {
  label: string,
  action: () => void,
  textStyle?: TextStyle,
  id: string,
}

export interface OptionProps {
  /**
   * An array of objects with keys `label`: `String` and `action`: `function: void`.
   * The `label` is show when the option is open while the `function` is called
   * the a click event is done on the label.
   */
  options: option[],
  /**
   * An Icon to use as the option menu button.
   */
  icon: React.ReactNode,
}

/**
 * A component that requires `options` and `Icon` props to returns a dropdown
 * menu with those options as items inside the menu.
 */

export class Option extends React.Component<OptionProps> {
  menu: { hide: () => void, show: () => void } | null = null;

  constructor(props: OptionProps) {
    super(props);
    this.state = {};
  }

  setMenuRef = (ref) => {
    this.menu = ref;
  };

  hideMenu = () => {
    this.menu?.hide();
  };

  showMenu = () => {
    this.menu?.show();
  };

  render() {
    const { options, icon } = this.props;

    return (
      <View>
        <Menu
          ref={this.setMenuRef}
          style={{ borderRadius: 10, minWidth: '55%' }}
          button={
            <Clickable
              hitSlop={{ left: 20, right: 20, top: 20, bottom: 20 }}
              onClick={this.showMenu}>
              {icon}
            </Clickable>
          }>
          {options.map((o) => (
            <>
              <MenuItem
                textStyle={{ ...o.textStyle }}
                // eslint-disable-next-line react/no-array-index-key
                key={o.id}
                onPress={() => {
                  o.action();
                  return this.hideMenu();
                }}>
                {o.label}
              </MenuItem>
              {/* <MenuDivider /> */}
            </>
          ))}
        </Menu>
      </View>
    );
  }
}
