import React, { Component } from 'react';
import './Header.css';
import { Input } from '../Input/Input';

export class Header extends Component {
  state = {
    address: '',
    time: '',
    search: '',
    isMobileSearchVisible: false,
    isMobileDeliveryInfoVisible: false,
  };

  handleChange = ({ target }) => {
    this.setState({
      [target.name]: target.value,
    });
  };

  toggleSearch = () => this.setState(({ isMobileSearchVisible }) => ({
    isMobileSearchVisible: !isMobileSearchVisible,
    isMobileDeliveryInfoVisible: false,
  }));

  toggleDeliveryInfo = () => this.setState(prevState => {
    const { isMobileDeliveryInfoVisible } = prevState;

    return {
      isMobileDeliveryInfoVisible: !isMobileDeliveryInfoVisible,
      isMobileSearchVisible: false,
    };
  });

  closeMobile = () => this.setState({
    isMobileSearchVisible: false,
    isMobileDeliveryInfoVisible: false,
  });

  render() {
    const {
      address,
      time,
      search,
      isMobileSearchVisible,
      isMobileDeliveryInfoVisible,
    } = this.state;

    return (
      <header className="header">
        <div className="content">
          <div className="header__inner">
            <img
              src="./images/logo.svg"
              alt="Uber Eats"
              className="header__logo"
            />

            <div className="header__delivery-info">
              <Input
                name="address"
                value={address}
                onChange={this.handleChange}
                placeholder="Address"
                iconUrl="./images/place.svg"
              />
              <Input
                name="time"
                value={time}
                onChange={this.handleChange}
                placeholder="Time"
                type="time"
              />
            </div>

            <div className="header__search">
              <Input
                name="search"
                value={search}
                onChange={this.handleChange}
                placeholder="Search"
                iconUrl="./images/search.svg"
              />
            </div>

            <div className="header__toggle-buttons">
              <button
                type="button"
                className="header__toggle-btn"
                onClick={this.toggleDeliveryInfo}
              >
                <img
                  src="./images/place.svg"
                  alt="place icon"
                />
              </button>
              <button
                type="button"
                className="header__toggle-btn"
                onClick={this.toggleSearch}
              >
                <img
                  src="./images/search.svg"
                  alt="searc icon" />
              </button>
            </div>

            <a
              className="header__link"
              href="/"
            >
              Sign In
            </a>
          </div>

          {(isMobileSearchVisible || isMobileDeliveryInfoVisible) && (
            <div className="header__mobile-controls mobile-controls">
              {isMobileSearchVisible && (
                <Input
                  label="Find"
                  name="search"
                  value={search}
                  onChange={this.handleChange}
                  placeholder="Search"
                  iconUrl="./images/search.svg"
                  isSmall={false}
                />
              )}

              {isMobileDeliveryInfoVisible && (
                <>
                  <Input
                    label="Where"
                    name="address"
                    value={address}
                    onChange={this.handleChange}
                    placeholder="Address"
                    iconUrl="./images/place.svg"
                    isSmall={false}
                  />
                  <Input
                    label="To"
                    name="time"
                    value={time}
                    onChange={this.handleChange}
                    placeholder="Time"
                    type="time"
                    isSmall={false}
                  />
                </>
              )}

              <button
                type="button"
                className="mobile-controls__close"
                onClick={this.closeMobile}
              >
                <img
                  src="./images/close.svg"
                  alt="searc icon" />
              </button>
            </div>
          )}
        </div>
      </header>
    )
  }
}
