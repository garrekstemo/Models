var documenterSearchIndex = {"docs":
[{"location":"specialfuncs/#Special-Functions","page":"Special Functions","title":"Special Functions","text":"","category":"section"},{"location":"specialfuncs/","page":"Special Functions","title":"Special Functions","text":"These function are specific to cavity polariton research, where things like the cavity transmittance, material dielectric function, and cavity free spectral range (FSR) need to be calculated and modeled.","category":"page"},{"location":"specialfuncs/","page":"Special Functions","title":"Special Functions","text":"Modules = [Models]\nPages = [\"special_functions.jl\"]","category":"page"},{"location":"specialfuncs/#Models.cavity_mode_energy-Tuple{Real, Any}","page":"Special Functions","title":"Models.cavity_mode_energy","text":"cavity_mode_energy(θ::Real, p)\n\np = [E_0, n_eff]\n\nCavity mode energy as a function of incident angle.\n\nbeginaligned\n    E_textcavity(theta) = E_0 left( 1 - fracsin^2(theta)n^2 right)^-12\nendaligned\n\nwhere E_0 is the energy of the cavity mode at zero degrees incidence angle.\n\n\n\n\n\n","category":"method"},{"location":"specialfuncs/#Models.cavity_transmittance-Tuple{Any, Any}","page":"Special Functions","title":"Models.cavity_transmittance","text":"cavity_transmittance(ν, p)\n\np = [n, α, L, T, R, ϕ]\n\nCavity transmittance as a function of frequency.\n\nbeginaligned\n    T(nu) = fracT^2 e^-alpha L1 + R^2 e^-2 alpha L - 2 R e^-alpha L cos(4pi n L nu + 2phi)\nendaligned\n\nwhere nu is the frequency, alpha and n are the frequency-dependent absorption and refractive index, L is the cavity length, and phi is the phase accumulated upon reflection against a mirror. T and R are the cavity transmittance and reflectance, respectively, where it is assumed that T = 1 - R.\n\n\n\n\n\n","category":"method"},{"location":"specialfuncs/#Models.coupled_energies-Union{Tuple{T3}, Tuple{T2}, Tuple{T1}, Tuple{Vector{T1}, T2, T3}, Tuple{Vector{T1}, T2, T3, Any}} where {T1, T2, T3<:Real}","page":"Special Functions","title":"Models.coupled_energies","text":"coupled_energies(E_c::Vector{Real}, E_v::Real, V::Real, branch=0)\n\nCoupled energies found by diagonalizing the coupled-oscillator model Hamiltonian with principle energies E_c (cavity photon) and E_v (material excitation), and interaction energy V. The lower and upper branches are called with branch=0 and branch=1, respectively.\n\nbeginaligned\nH = \nbeginpmatrix\n    E_1(theta)  Omega_R2 Omega_R2  E_2\nendpmatrix\nendaligned\n\nDiagonalizing H gives the interaction energies as a function of theta. These exhibit avoided crossing behavior near  where the cavity mode energy equals the material excitation energy.\n\nbeginaligned\n    E_pm(theta) = frac12(E_1(theta) + E_2) pm frac12 sqrt(E_1(theta) - E_2)^2 + Omega_R^2\nendaligned\n\nhttps://en.wikipedia.org/wiki/Avoided_crossing\n\n\n\n\n\n","category":"method"},{"location":"specialfuncs/#Models.dielectric_imag-Tuple{Any, Any}","page":"Special Functions","title":"Models.dielectric_imag","text":"dielectric_imag(ν, p)\n\np = [ν_0, A, Γ, y_0]\n\nFrequency-dependent imaginary part of the dielectric function.\n\nbeginaligned\nvarepsilon_2(nu) = fracA Gamma nu(nu^2 - nu_0^2)^2 + (Gammanu)^2\nendaligned\n\n\n\n\n\n","category":"method"},{"location":"specialfuncs/#Models.dielectric_real-Tuple{Any, Any}","page":"Special Functions","title":"Models.dielectric_real","text":"dielectric_real(ν, p)\n\np = [ν_0, A, Γ, n_eff]\n\nFrequency-dependent real part of the dielectric function in terms of the background index and Lorentzian oscillator,\n\nbeginaligned\nvarepsilon_1(nu) = n^2 + fracA (nu_0^2 - nu^2)(nu^2 - nu_0^2)^2 + (Gammanu)^2\nendaligned\n\nwhere n is the background real index, nu_0 is the excitation frequency, Gamma is the line width of the oscillator, and A is the  oscillator strength.\n\n\n\n\n\n","category":"method"},{"location":"specialfuncs/#Models.fsr-Tuple{Vector{Real}}","page":"Special Functions","title":"Models.fsr","text":"fsr(peak_positions::Vector{Real)\n\nFind the free spectral range for all adjacent peaks. Return the list of FSRs, the average FSR for the range, and the standard deviation.\n\n\n\n\n\n","category":"method"},{"location":"specialfuncs/#Models.fsr-Union{Tuple{T2}, Tuple{T1}, Tuple{T1, T2}} where {T1, T2<:Real}","page":"Special Functions","title":"Models.fsr","text":"fsr(x1::Real, x2::Real)\n\nSolve for one of three variables in the equation     for free spectral range in terms of the other two.\n\nbeginaligned\n    Delta nu = frac12 L n\nendaligned\n\nwhere Deltanu = nu_2 - nu_1, L is the intracavity length, and n is intracavity index of refraction.\n\n\n\n\n\n","category":"method"},{"location":"funcs/#General-Functions","page":"Models","title":"General Functions","text":"","category":"section"},{"location":"funcs/","page":"Models","title":"Models","text":"Common functions and lineshapes for spectroscopy.","category":"page"},{"location":"funcs/","page":"Models","title":"Models","text":"Modules = [Models]\nPages = [\"model_functions.jl\"]","category":"page"},{"location":"funcs/#Models.double_exponential","page":"Models","title":"Models.double_exponential","text":"double_exponential(x, p = [f_1, τ_1, f_2, τ_2])\n\nExponential decay function with two stages represented by two different time constants, tau_1 and tau_2.\n\nbeginaligned\n    f(x f_1 tau_1 f_2 tau_2) = f_1 e^-x  tau_1 + f_2 e^-x  tau_2\nendaligned\n\n\n\n\n\n","category":"function"},{"location":"funcs/#Models.double_lorentzian","page":"Models","title":"Models.double_lorentzian","text":"double_lorentzian(ν, p = [A_1, σ_1, ν_1, A_2, σ_2, ν_2])\n\nSum of two Lorentzian functions.\n\n\n\n\n\n","category":"function"},{"location":"funcs/#Models.exponential","page":"Models","title":"Models.exponential","text":"exponential(x, p = [f_0, τ])\n\nExponential decay function with amplitude f_0, and decay constant τ.\n\nbeginaligned\n    f(x f_0 tau) = f_0 e^-x  tau\nendaligned\n\nhttps://en.wikipedia.org/wiki/Exponential_decay\n\n\n\n\n\n","category":"function"},{"location":"funcs/#Models.gaussian","page":"Models","title":"Models.gaussian","text":"gaussian(x, p = [A, μ, σ])\n\nGaussian function with amplitude A, center μ, and width σ.\n\nbeginaligned\n    f(x A mu sigma) = fracAsigma sqrt2pi e^-(x - mu)^2  (2 sigma^2)\nendaligned\n\nhttps://en.wikipedia.org/wiki/Gaussian_function\n\n\n\n\n\n","category":"function"},{"location":"funcs/#Models.gaussian2d","page":"Models","title":"Models.gaussian2d","text":"gaussian2d(x, y, p = [A, x_0, σ_x, y_0, σ_y])\n\nTwo-dimensional Gaussian function centered at (x_0 y_0) and x-width σ_x and y-width σ_y, and amplitude A.\n\nbeginaligned\n    f(x y A x_0 sigma_x y_0 sigma_y) = A expleft(-left( frac(x - x_0)^22 sigma_x^2 + frac(y - y_0)^22 sigma_y^2 right)right)\nendaligned\n\n\n\n\n\n","category":"function"},{"location":"funcs/#Models.lorentzian","page":"Models","title":"Models.lorentzian","text":"lorentzian(ν, p = [A, ν_0, γ])\n\nLorentzian function with amplitude A, center frequency ν_0, and full width at half maximum (FWHM) 2γ.\n\nbeginaligned\n    f(nu A nu_0 gamma) = fracApi fracgamma(nu - nu_0)^2 + gamma^2\nendaligned\n\nhttps://en.wikipedia.org/wiki/Cauchy_distribution\n\n\n\n\n\n","category":"function"},{"location":"funcs/#Models.sine","page":"Models","title":"Models.sine","text":"sine(x, p = [A, ω, ϕ])\n\nSinusoidal function.\n\n\n\n\n\n","category":"function"},{"location":"funcs/#Models.squared_errors-Union{Tuple{F}, Tuple{Any, F, Any, Any}} where F<:Function","page":"Models","title":"Models.squared_errors","text":"squared_errors(p, f, X, Y)\n\nTakes a function, f, and its parameters, p and sums the squared errors given x-data and y-data X and Y, respectively.\n\n\n\n\n\n","category":"method"},{"location":"#Models.jl-Documentation","page":"Home","title":"Models.jl Documentation","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"This simple package contains functions and lineshapes commonly used in vibrational polariton spectroscopic experiments. The main purpose is code reusability for my own projects, but on the off chance that it is useful to others, it is available. These functions are best used together with Optim.jl or the global optimization package Optimization.jl for fitting. It would be nice if models and fitting procedures were bundled together in the future, like the lmfit package available for Python (leveraging SciPy).","category":"page"},{"location":"","page":"Home","title":"Home","text":"The squared_errors() function is useful for use with Optim.jl for curve fitting. It can be implemented for a set of x- and y-data and  a model, e.g. an exponential curve. (Makie.jl is not a dependency; we only use it to demonstrate the fit.)","category":"page"},{"location":"","page":"Home","title":"Home","text":"using Pkg\nPkg.add([\"Optim\", \"CairoMakie\"])\nPkg.add(url=\"https://github.com/garrekstemo/Models.jl\")","category":"page"},{"location":"","page":"Home","title":"Home","text":"using Optim\nusing Models\nusing CairoMakie\n\nxdata = -30:0.4:1.0\n\nA, τ, y_0 = [0.1, 5.0, 0.3]\nydata = exponential(xdata, [A, τ, y_0]) .+ 1.2 * randn(length(xdata))\n\np0 = [0.1, 1.0, 0.0]\nresult = optimize(b -> squared_errors(b, exponential, xdata, ydata), p0)\nparams = Optim.minimizer(result)\n\nfig = Figure()\nax = Axis(fig[1, 1])\n\nlines!(ax, xdata, ydata, label = \"data\")\nlines!(ax, xdata, exponential(xdata, params), label = \"fit\")\naxislegend(ax)\n\nfig","category":"page"}]
}
