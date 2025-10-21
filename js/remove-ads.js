// QP-ROLLBACK-ADS-001: Remove all ad placeholders and scripts safely
// This script removes ad containers and disables ad initialization
(function(){
  const adSelectors = ['.ad-container', '.ad-placeholder', '#mobileAdFooter', 'ins.adsbygoogle'];
  adSelectors.forEach(sel => document.querySelectorAll(sel).forEach(n => n.remove()));
  window.adsbygoogle = [];
})();
