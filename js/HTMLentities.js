function convertHTML(str) {
  // &colon;&rpar;
  let regex = /(?:^|;)([^&;]+)(?:&|$)/ig
  let result = String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/[']/g, "&apos;");
  console.log(result);
  return result;
}

convertHTML("Hamburgers < Pizza < Tacos");