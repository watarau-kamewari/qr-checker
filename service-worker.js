<script>
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js')
      .then(() => console.log('✅ SW登録成功'))
      .catch(err => console.error('❌ SW登録失敗:', err));
  }
</script>
