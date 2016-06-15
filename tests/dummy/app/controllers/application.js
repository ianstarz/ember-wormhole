import Ember from 'ember';

var set = Ember.set;

export default Ember.Controller.extend({
  isShowingModal: false,
  isShowingSidebarContent: false,
  sidebarId: 'sidebar',
  isInPlace: false,
  isTestingDocumentTitle: false,
  errorCaseId: 'target-that-doesnt-exist',
  isShowingErrorCase: false,
  favicon: "http://emberjs.com/images/favicon.png",
  actions: {
    toggleModal() {
      this.toggleProperty('isShowingModal');
    },
    toggleSidebarContent() {
      this.toggleProperty('isShowingSidebarContent');
    },
    switchSidebars() {
      var otherSidebarId = this.sidebarId === 'sidebar' ? 'othersidebar' : 'sidebar';
      set(this, 'sidebarId', otherSidebarId);
    },
    toggleInPlace() {
      this.toggleProperty('isInPlace');
    },
    toggleTitle() {
      this.toggleProperty('isTestingDocumentTitle');
    },
    toggleErrorCase() {
      this.toggleProperty('isShowingErrorCase');
    }
  }
});
