
// 商品データ
const product = {
  id: "hf-000-sn-test",
  name: "テスト用-ヘッドフォン",
  category: "オーディオ",
  price: 32,000,
  skus: [
    { code: "BLACK", label: "ブラック" },
    { code: "WHITE", label: "ホワイト" },
    { code: "SILVER", label: "シルバー" }
  ]
};

// ボタンにイベントを紐づけ
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("sku-black").addEventListener("click", () => {
    console.log(`閲覧: ${product.name} - ${product.skus[0].label}`);
  });
  document.getElementById("sku-white").addEventListener("click", () => {
    console.log(`閲覧: ${product.name} - ${product.skus[1].label}`);
  });
  document.getElementById("sku-silver").addEventListener("click", () => {
    console.log(`閲覧: ${product.name} - ${product.skus[2].label}`);
  });
});