var path = require('path');
var fs = require('fs');

module.exports = {
  accordion: fs.readFileSync(path.join(__dirname, '../../examples', 'Accordion.js'), 'utf8'),
  badgeCollections: fs.readFileSync(path.join(__dirname, '../../examples', 'BadgeCollections.js'), 'utf8'),
  badgeDropdowns: fs.readFileSync(path.join(__dirname, '../../examples', 'BadgeDropdowns.js'), 'utf8'),
  badgeNavbar: fs.readFileSync(path.join(__dirname, '../../examples', 'BadgeNavbar.js'), 'utf8'),
  basicCollection: fs.readFileSync(path.join(__dirname, '../../examples', 'BasicCollection.js'), 'utf8'),
  breadcrumb: fs.readFileSync(path.join(__dirname, '../../examples', 'Breadcrumbs.js'), 'utf8'),
  cardFull: fs.readFileSync(path.join(__dirname, '../../examples', 'CardFull.js'), 'utf8'),
  cardImage: fs.readFileSync(path.join(__dirname, '../../examples', 'CardImage.js'), 'utf8'),
  cardPanel: fs.readFileSync(path.join(__dirname, '../../examples', 'CardPanel.js'), 'utf8'),
  cardReveal: fs.readFileSync(path.join(__dirname, '../../examples', 'CardReveal.js'), 'utf8'),
  cardSimple: fs.readFileSync(path.join(__dirname, '../../examples', 'CardSimple.js'), 'utf8'),
  collapsible: fs.readFileSync(path.join(__dirname, '../../examples', 'Collapsible.js'), 'utf8'),
  collectionWithHeader: fs.readFileSync(path.join(__dirname, '../../examples', 'CollectionWithHeader.js'), 'utf8'),
  collectionWithHref: fs.readFileSync(path.join(__dirname, '../../examples', 'CollectionWithHref.js'), 'utf8'),
  contactChip: fs.readFileSync(path.join(__dirname, '../../examples', 'ContactChip.js'), 'utf8'),
  disabledButton: fs.readFileSync(path.join(__dirname, '../../examples', 'DisabledButton.js'), 'utf8'),
  fixedActionButton: fs.readFileSync(path.join(__dirname, '../../examples', 'FixedActionButton.js'), 'utf8'),
  flatButton: fs.readFileSync(path.join(__dirname, '../../examples', 'FlatButton.js'), 'utf8'),
  floatingButton: fs.readFileSync(path.join(__dirname, '../../examples', 'FloatingButton.js'), 'utf8'),
  grid: fs.readFileSync(path.join(__dirname, '../../examples', 'Grid.js'), 'utf8'),
  horizontalFab: fs.readFileSync(path.join(__dirname, '../../examples', 'HorizontalFAB.js'), 'utf8'),
  iconLinksNavbar: fs.readFileSync(path.join(__dirname, '../../examples', 'IconLinksNavbar.js'), 'utf8'),
  iconPrefixesInput: fs.readFileSync(path.join(__dirname, '../../examples', 'IconPrefixesInput.js'), 'utf8'),
  inputFields: fs.readFileSync(path.join(__dirname, '../../examples', 'InputFields.js'), 'utf8'),
  largeButton: fs.readFileSync(path.join(__dirname, '../../examples', 'LargeButton.js'), 'utf8'),
  leftAlignedNavbar: fs.readFileSync(path.join(__dirname, '../../examples', 'LeftAlignedNavbar.js'), 'utf8'),
  mediaBox: fs.readFileSync(path.join(__dirname, '../../examples', 'MediaBox.js'), 'utf8'),
  modal: fs.readFileSync(path.join(__dirname, '../../examples', 'Modal.js'), 'utf8'),
  modalWithBottomSheet: fs.readFileSync(path.join(__dirname, '../../examples', 'ModalWithBottomSheet.js'), 'utf8'),
  modalWithFixedFooter: fs.readFileSync(path.join(__dirname, '../../examples', 'ModalWithFixedFooter.js'), 'utf8'),
  pagination: fs.readFileSync(path.join(__dirname, '../../examples', 'Pagination.js'), 'utf8'),
  prefillingTextInput: fs.readFileSync(path.join(__dirname, '../../examples', 'PrefillingTextInput.js'), 'utf8'),
  preloaders: fs.readFileSync(path.join(__dirname, '../../examples', 'Preloaders.js'), 'utf8'),
  raisedButton: fs.readFileSync(path.join(__dirname, '../../examples', 'RaisedButton.js'), 'utf8'),
  rightAlighedNavbar: fs.readFileSync(path.join(__dirname, '../../examples', 'RightAlignedNavbar.js'), 'utf8'),
  slider: fs.readFileSync(path.join(__dirname, '../../examples', 'Slider.js'), 'utf8'),
  submitButton: fs.readFileSync(path.join(__dirname, '../../examples', 'SubmitButton.js'), 'utf8'),
  tab: fs.readFileSync(path.join(__dirname, '../../examples', 'Tab.js'), 'utf8'),
  tag: fs.readFileSync(path.join(__dirname, '../../examples', 'Tag.js'), 'utf8'),
  toast: fs.readFileSync(path.join(__dirname, '../../examples', 'Toast.js'), 'utf8'),
};
