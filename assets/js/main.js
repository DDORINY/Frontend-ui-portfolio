/**
 * main.js — shared tiny helpers (no framework)
 */

document.addEventListener("DOMContentLoaded", () => {
  // 1) 현재 URL 기반으로 .js-active 표시(원하면 버튼/링크에 적용)
  const current = location.pathname.split("/").pop();
  document.querySelectorAll("[data-active]").forEach((el) => {
    const target = el.getAttribute("data-active");
    if (target && current === target) el.classList.add("active");
  });

  // 2) 파일 선택하면 자동 업로드 submit (data-auto-submit="true")
  document.querySelectorAll('input[type="file"][data-auto-submit="true"]').forEach((input) => {
    input.addEventListener("change", () => {
      const formId = input.getAttribute("data-form");
      const form = formId ? document.getElementById(formId) : input.closest("form");
      if (form && input.files && input.files.length > 0) form.submit();
    });
  });

  // 3) 비밀번호 보기 토글 (data-toggle="password")
  document.querySelectorAll('[data-toggle="password"]').forEach((btn) => {
    btn.addEventListener("click", () => {
      const targetId = btn.getAttribute("data-target");
      const input = document.getElementById(targetId);
      if (!input) return;

      const isPw = input.type === "password";
      input.type = isPw ? "text" : "password";
      btn.innerHTML = isPw ? '<i class="bi bi-eye-slash"></i>' : '<i class="bi bi-eye"></i>';
    });
  });
});
