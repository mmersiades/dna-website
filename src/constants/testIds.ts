const testIds = {
  footer: {
    mailingList: {
      emailInput: 'footer__mailing-list__email-input',
      submitButton: 'footer__mailing-list__submit-button',
    },
    contact: {
      emailInput: 'footer__contact__email-input',
      submitButton: 'footer__contact__submit-button',
      messageInput: 'footer__contact__message-input',
      nameInput: 'footer__contact__name-input',
    },
  },
  header: {
    link: (nav: string, label: string) => `header__${nav}__${label}-link`,
    openMenuButton: 'header__menu__open-button',
    closeMenuButton: 'header__menu__close-button',
  },
  national: {
    form: {
      nameInput: 'national__join-form__name-input',
      emailInput: 'national__join-form__email-input',
      submitButton: 'national__join-form__submit-button',
    },
  },
};

export default testIds;
