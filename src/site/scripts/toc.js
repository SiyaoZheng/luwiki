                                    (function() {
                                          const tocLinks = document.querySelectorAll('.toc-container a[href^="#"]');
                                          if (!tocLinks.length) return;

                                          const headings = Array.from(tocLinks).map(link => {
                                                const id = decodeURIComponent(link.getAttribute('href').slice(1));
                                                return { link, target: document.getElementById(id) };
                                          }).filter(h => h.target);

                                          function updateActive() {
                                                let current = headings[0];
                                                for (const h of headings) {
                                                      if (h.target.getBoundingClientRect().top <= 100) {
                                                            current = h;
                                                      }
                                                }
                                                tocLinks.forEach(l => l.classList.remove('toc-active'));
                                                if (current) current.link.classList.add('toc-active');
                                          }

                                          window.addEventListener('scroll', updateActive, { passive: true });
                                          updateActive();
                                    })();
